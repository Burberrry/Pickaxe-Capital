set projectDir to "/Users/b/Documents/April 18 2028"
set nodePath to "/Applications/Codex.app/Contents/Resources/node"
set websiteUrl to "http://localhost:4328/agents"
set logPath to "/tmp/pickaxe-website.log"

set serverCommand to "cd " & quoted form of projectDir & "; " & ¬
  "if /usr/bin/curl -fsS http://localhost:4328/ >/dev/null 2>&1; then " & ¬
  "exit 0; " & ¬
  "fi; " & ¬
  "nohup " & quoted form of nodePath & " server.mjs > " & quoted form of logPath & " 2>&1 &"

do shell script serverCommand

delay 2

try
  tell application "Google Chrome"
    activate
    open location websiteUrl
  end tell
on error
  open location websiteUrl
end try
