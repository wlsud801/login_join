# Practice - Join & Login

React, axios, JWTtoken을 이용하여 로그인, 회원가입을 구현해보았습니다.

- 로그인, 회원가입 페이지를 각각 구현합니다.
- 아이디와 비밀번호가 모두 입력되지 않으면, API 요청을 보내지 않도록 합니다.
- 서버의 에러를 `alert` 또는 직접 만든 모달 등을 통해 유저에게 표시합니다.
    - id가 중복된 경우
    - 존재하지 않는 아이디를 입력한 경우
    - 비밀번호가 잘못된 경우
- JWT의 유효시간이 만료된 경우, 유저에게 재로그인을 할 것을 표시합니다.
- 로그인을 하지 않은 경우에는 `로그인/회원가입` 페이지만 접근 가능합니다.
- 로그인을 이미 한 경우 `로그인/회원가입` 페이지는 접근 할 수 없습니다.
- 로그아웃 기능을 구현합니다.


# Commit convention

|   feat   | 새로운 기능을 추가, 기존의 기능을 요구 사항에 맞추어 수정 |
| :------: | :-------------------------------------------------------- |
|  bugfix  | 기능에 대한 버그 수정                                     |
|   docs   | 문서 수정 (ex. README.md)                                 |
| refactor | 코드리펙토링                                              |
|  merge   | 병합                                                      |
|  design  | CSS 등 사용자 UI 디자인 변경                              |
|  style   | 기능에 직접적인 영향이 없는 단순 코드 수정                |
