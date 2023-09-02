# august-archive

배우고 느낀 것들을 모아두는 공간입니다.
(블로그 제작과 기술 습득을 목표로 합니다.)

## Branching Strategy

Trunk-Based Development

`feature/<specific-feature-name>/<#issue-number>`

## Conventional Commits

### forcing eslint through husky

```
0. `chmod +x .husky/pre-commit` 명령어 실행 (.husky/pre-commit에 실행 권한 부여)
1. node_modules 폴더 삭제 후 다시 npm install
2. npx prettier --write .
3. npm run lint
```

---

### default commit convention

```
feat: 새로운 기능 관련
fix: 버그 수정 관련
perf: 성능 개선 관련
refactor: 리팩토링 관련
docs: 문서 작성 관련
test: 테스트 관련
chore: 패키지 및 기타 관련
design: css 등 ui 관련
style: 코드 포맷팅 등 코드 의미에 영향 주지 않는
```

## Design Pattern

compound component pattern for compositing component

```
<component>
  <component.sub1 />
  <component.sub2 />
  <component.sub3 />
  ...
</component>
```

## Folder Structure

NX Library Types

lib types : `feature`, `util`, `ui`, `data-access`

file name : `<FileName>.<lib-type>.tsx`

```
/libs
  - /(domain)
    - /feature
      - name.feature.tsx
    - /data-acccess
      - name.data-access.tsx
    - /ui
      - name.ui.tsx
    - /util
      - name.util.ts
    - /shared
  - ...
  - /shared
```

## Tech Stack

```
core: next.js app router(v13.4.~), react(v18.2.~), typescript

state management(client, server): redux, (tanstack query)

style: sass(scss), module & classnames, framer-motion

testing: storybook, jest, testing-library

serverless: github api, next.js api, axios, vercel(cicd)
```
