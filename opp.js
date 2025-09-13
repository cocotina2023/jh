 let userID = "a1b2c3d4-e5f6-7890-1234-567890abcdef";
  const proxyIPs = [""];
    EOF

# 拼接混淆体
cat ".github/actions-temp/op.body.js" >> "opp.js"

rm -rf .github/actions-temp
echo "✅ Generated opp.js at repo root"
