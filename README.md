# 리액트 3주차 과제_미니 React 애플리케이션만들기

## 배포 주소
[Netlify 배포](https://likelion-frontend-6th.netlify.app/)  
[Vercel 배포](https://likelion-fe6th.vercel.app/) 


## 목차
[프로젝트 조원](#프로젝트-조원)  
[폴더 구조](#폴더-구조)  
[구현 부분 및 리팩토링 예정 부분](#구현-부분-및-리팩토링-예정-부분)  
[추가하고싶은 부분](#추가하고싶은-부분)



## 프로젝트 조원
|조원1|조원2|
|------|---|
|<img src="https://github.com/KIMGEUNDU/weekend-todo/assets/126174401/105a96aa-1093-44ea-bb0a-75f05144997d" width="100px" height="100px">|<img src="https://github.com/KIMGEUNDU/weekend-todo/assets/126174401/073512ef-dbf5-4b7d-a1d4-be2e6f3308eb" width="100px" height="100px">|
|김건주|김규민|
|[Github](https://github.com/KIMGEUNDU)|[Github](https://github.com/Engsheet)|


## 폴더 구조

```
introduce-likelion6
├─ index.html
├─ src
│  ├─ api
│  │  └─ pocketbase.js
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ add.svg
│  │  ├─ lionLogo.png
│  │  └─ search.svg
│  ├─ components
│  │  ├─ Logo.jsx
│  │  ├─ MenuBar.jsx
│  │  ├─ Spinner.jsx
│  │  └─ SwiperButton.jsx
│  ├─ hooks
│  │  ├─ useDataDetails.js
│  │  ├─ useDataList.js
│  │  └─ useFetchData.js
│  ├─ layout
│  │  ├─ AddList.jsx
│  │  ├─ Heading.jsx
│  │  └─ RootLayout.jsx
│  ├─ main.jsx
│  ├─ routes.jsx
│  ├─ styles
│  │  └─ tailwind.css
│  ├─ utils
│  │  └─ getImageURL.js
│  └─ views
│     ├─ CharacterDetails.jsx
│     ├─ CharacterList.jsx
└─    └─ Home.jsx
```

## 구현 부분 및 리팩토링 예정 부분
### 🦆 김건주  
<b>담당한 부분 : 헤더 부분, 루트 페이지, 리스트 렌더링, 리스트 추가 페이지</b>

1. AddList.jsx - 데이터가 등록된 후 로딩 화면 다음에 폼 화면이 다시 나오고 '등록되었습니다'라는 안내문구가 나옵니다. 이 부분을 폼 화면은 안보이고 안내문구만 나오게 리팩토링 예정입니다.
2. 시안이 없어서 UI 구성하는 것과 버튼 컴포넌트를 나누고 ```props``` 전달하는 것에 어려움을 느꼈습니다.
3. 데이터를 불러오고 랜더링 하는 부분에서 어려움을 느꼈지만 배웠던 코드를 복기하면서 데이터 불러오기에 성공했습니다.

<br/>

### 🐈‍⬛ 김규민  
<b>담당한 부분 : 환경 구성, 라우터 구성, 리스트 렌더링, 상세 페이지 렌더링, (수정 및 삭제 페이지 - 미완)</b>


1. CharacterDetails.jsx - CharacterList 의 ```background-color``` 속성을 Context 를 활용하려 했으나 코드 작성에 어려움이 있었습니다.  
- ${setColor(dataForm.items.findIndex(item => { item.id == dataId; }))}  
- 현재는 고정된 색으로 표시되는 상태  
2. CharacterEdit.jsx - 수정 및 삭제 페이지 코드 작성 중... 만들고 나서 모달창으로 리팩토링 고려중입니다.  
![](https://cdn.discordapp.com/attachments/1116991754281947197/1145365314306064454/d57d83ede883faea.PNG)


## 추가하고싶은 부분

1. 데이터 수정, 제거
2. 검색
3. 데이터 추가, 수정페이지 모달창으로 만들어보기
4. 애니메이션




