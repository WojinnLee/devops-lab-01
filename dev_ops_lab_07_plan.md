# LAB 07 – GitHub Workflow, Pull Request, CI & Branch Protection

## 🎯 1. Mục tiêu
Sau khi hoàn thành lab, sinh viên có thể:
- Sử dụng Git theo workflow thực tế (branch, commit, pull request)
- Làm việc với GitHub (repo, PR, review)
- Hiểu CI/CD cơ bản với GitHub Actions
- Cấu hình bảo vệ branch main

---

## 📚 2. Kiến thức nền
- Git cơ bản
- JavaScript cơ bản
- Node.js

---

## 🏗 3. Setup Project

### Bước 1: Tạo repository
- Tạo repo: `devops-lab-01`
- Public + README

### Bước 2: Clone
```bash
git clone https://github.com/<username>/devops-lab-01.git
cd devops-lab-01
```

---

## ⚙ 4. Setup Node.js
```bash
npm init -y
npm install --save-dev jest
```

Cập nhật `package.json`:
```json
"scripts": {
  "test": "jest"
}
```

Tạo cấu trúc:
```bash
mkdir src tests
touch src/calculator.js
touch tests/calculator.test.js
```

---

## 🧮 5. Code
`src/calculator.js`
```js
function add(a, b) { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by zero");
  return a / b;
}
module.exports = { add, subtract, multiply, divide };
```

---

## 🧪 6. Unit Test
`tests/calculator.test.js`
```js
const { add, subtract, multiply, divide } = require("../src/calculator");

test("add", () => expect(add(2,3)).toBe(5));
test("subtract", () => expect(subtract(5,3)).toBe(2));
test("multiply", () => expect(multiply(2,3)).toBe(6));
test("divide", () => expect(divide(6,3)).toBe(2));
test("divide by zero", () => {
  expect(() => divide(5,0)).toThrow();
});
```

Chạy:
```bash
npm test
```

---

## 🌿 7. Git Workflow

### Commit ban đầu
```bash
git add .
git commit -m "init: setup project"
git push origin main
```

### Tạo branch
```bash
git checkout -b develop
git push origin develop

git checkout -b feature/add-logging
```

---

## ✍ 8. Feature
Sửa hàm add:
```js
function add(a, b) {
  console.log("Adding:", a, b);
  return a + b;
}
```

Commit:
```bash
git commit -am "feat: add logging"
git push origin feature/add-logging
```

---

## 🔁 9. Pull Request
- Base: develop
- Compare: feature/add-logging

Nội dung:
```
Title: feat: add logging
Summary: Add console log
How to test: npm test
```

---

## 🤖 10. CI (GitHub Actions)
`.github/workflows/ci.yml`
```yaml
name: Node CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm test
```

---

## ❌ 11. Test CI Fail
Sửa lỗi:
```js
return a + b + 10;
```

Push → CI FAIL

---

## 🔒 12. Branch Protection
Settings → Branches → Add rule:
- Require PR
- Require approval
- Require CI pass
- Disable force push

---

## 🔄 13. Fix & Merge
- Fix code
- CI PASS
- Merge PR

---

## 📋 14. Câu hỏi
1. Pull Request là gì?
2. Vì sao không push trực tiếp main?
3. CI hoạt động thế nào?
4. CI fail thì sao?
5. Branch protection để làm gì?

---

## 🧠 15. Tổng kết
- Git workflow
- Pull Request
- CI/CD
- Branch protection

