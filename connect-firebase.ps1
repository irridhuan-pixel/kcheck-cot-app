# Run in your own terminal. Authorisation codes are never written to a file.
$firebaseCliPath = Join-Path $PSScriptRoot 'node_modules/firebase-tools/lib/bin/firebase.js'
if (-not (Test-Path -LiteralPath $firebaseCliPath)) {
    Write-Error 'Install the project development dependencies before connecting Firebase.'
    exit 1
}
& node $firebaseCliPath login
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
Write-Host 'If the previous command already signed you in, press Enter below.'
$firebaseCodeSecure = Read-Host 'Otherwise paste the Firebase authorisation code here (hidden)' -AsSecureString
if ($firebaseCodeSecure.Length -eq 0) { exit 0 }
$firebaseCodePointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($firebaseCodeSecure)
try {
    $firebaseCodeValue = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($firebaseCodePointer)
    & node $firebaseCliPath login $firebaseCodeValue
    $firebaseLoginExit = $LASTEXITCODE
} finally {
    $firebaseCodeValue = $null
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($firebaseCodePointer)
    $firebaseCodeSecure.Dispose()
}
exit $firebaseLoginExit
