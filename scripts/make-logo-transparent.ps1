# Removes the solid white background from logo-original.png and writes a
# clean transparent PNG to logo.png (and a white-on-transparent variant is
# NOT needed — the mark itself is dark/blue and reads on any background).
#
# Near-white pixels become fully transparent; edge pixels get proportional
# alpha so the anti-aliased text/book edges stay smooth (no white fringe).

Add-Type -AssemblyName System.Drawing

# Source is the untouched original (kept outside /public so it never ships).
$srcPath = (Resolve-Path "$PSScriptRoot/../.backup/logo-original.png").Path
$outPath = (Resolve-Path "$PSScriptRoot/../public").Path + "\logo.png"

$src = New-Object System.Drawing.Bitmap($srcPath)
$w = $src.Width
$h = $src.Height
$out = New-Object System.Drawing.Bitmap($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

# Lock bits for speed.
$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$srcData = $src.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$outData = $out.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::WriteOnly, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)

$bytes = $w * $h * 4
$buf = New-Object byte[] $bytes
[System.Runtime.InteropServices.Marshal]::Copy($srcData.Scan0, $buf, 0, $bytes)

# Thresholds on "whiteness" = min(R,G,B).
$upper = 250.0   # >= this -> fully transparent (background white)
$lower = 200.0   # <= this -> fully opaque (real ink)

for ($i = 0; $i -lt $bytes; $i += 4) {
    # BGRA layout
    $b = $buf[$i]
    $g = $buf[$i + 1]
    $r = $buf[$i + 2]

    $minc = [Math]::Min($r, [Math]::Min($g, $b))
    if ($minc -ge $upper) {
        $buf[$i + 3] = 0
    }
    elseif ($minc -le $lower) {
        # keep as-is (opaque ink)
        $buf[$i + 3] = 255
    }
    else {
        # transition zone -> proportional alpha
        $alpha = [int](255.0 * ($upper - $minc) / ($upper - $lower))
        if ($alpha -lt 0) { $alpha = 0 } elseif ($alpha -gt 255) { $alpha = 255 }
        $buf[$i + 3] = [byte]$alpha
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($buf, 0, $outData.Scan0, $bytes)
$src.UnlockBits($srcData)
$out.UnlockBits($outData)

$out.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
$src.Dispose()
$out.Dispose()

Write-Output "Wrote transparent logo -> $outPath"
