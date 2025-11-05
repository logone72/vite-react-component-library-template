# Vite React Component Library Starter

Vite를 사용하여 React 컴포넌트 라이브러리를 생성하기 위한 템플릿입니다. 효율적인 개발, 테스트, 빌드를 위한 강력한 기능들을 포함하고 있습니다.

## 기능

- **React**: 웹 및 네이티브 사용자 인터페이스를 위한 JavaScript 라이브러리
- **TypeScript**: 강력한 타입 시스템을 제공하는 JavaScript의 상위 집합
- **Storybook**: UI 컴포넌트와 페이지를 격리된 환경에서 구축하기 위한 프론트엔드 워크샵
- **Vite**: 라이브러리를 매우 빠르게 실행하고 빌드하는 차세대 프론트엔드 도구
- **Vitest**: 차세대 테스팅 프레임워크
- **Sass/Scss**: CSS 전처리기로 스타일링 지원
- **clsx**: 조건부 클래스명을 관리하는 유틸리티
- **ESLint**: 코드에서 문제를 찾고 수정하는 도구
- **Prettier**: 코드 포맷터
- **Husky**: Git 훅을 관리하는 도구
- **Commitlint**: 커밋 메시지 컨벤션을 강제하는 도구
- **GitHub Actions**: Storybook을 GitHub Pages에 자동으로 배포하는 도구
- **GitHub Pages**: Storybook을 호스팅하는 도구
  - 데모: https://logone72.github.io/vite-react-component-library-template/

## 라이브러리 지원

이 템플릿은 다음을 지원합니다:

- **ESM (ES Modules)** 및 **CommonJS** 모두 지원
- **TypeScript 타입 정의** 자동 생성
- **CSS 스타일** 별도 export 가능

## 시작하기

1. 이 저장소를 클론합니다
2. `npm i`를 사용하여 의존성을 설치합니다

## 스크립트

- `dev`: 로컬 Storybook 서버를 시작합니다. 컴포넌트를 개발하고 미리보기할 때 사용합니다.
- `test`: Vitest를 사용하여 모든 테스트를 실행합니다.
- `test:watch`: Watch 모드로 테스트를 실행합니다.
- `build:storybook`: Storybook을 정적 웹 애플리케이션으로 빌드합니다.
- `build:lib`: Vite를 사용하여 컴포넌트 라이브러리를 빌드합니다.
- `lint`: ESLint를 실행합니다.
- `format`: Prettier를 사용하여 코드를 포맷팅합니다.

## 참고

이 템플릿은 [Vite React Component Library Starter](https://github.com/rayyamhk/vite-react-component-library-starter)를 기반으로 합니다.
