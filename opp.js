  let userID = "a1b2c3d4-e5f6-7890-1234-567890abcdef";
  const proxyIPs = [""];
        EOF

# 4) Append the obfuscated code body
cat ".github/actions-temp/op.obf.js" >> "opp.js"

# 5) Cleanup temporary files
rm -rf .github/actions-temp

echo "✅ Generated opp.js at repo root"
