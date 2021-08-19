# <div align="center">- 팀별 TodoList 관리 서비스 -</div>
<br/>
  <div width="100%" align="center">
  <img width="80%" alt="UI" src="https://user-images.githubusercontent.com/58355499/130120933-8611d273-a9c3-483b-8668-74b4d2c11678.gif"></div>
  <br/>
  <br/>
  
  ## 📍**프로젝트 진행**

- 개발 기간 :  2021.05.24 ~ 2021.06.13 (3주)
- 개발 인원 : 1명
- 담당 : FE개발(100%)

  <br/>


## 📍**서비스 소개**

팀별로 멤버의 TodoList를 관리할 수 있는 서비스입니다. 팀을 만들고 그 안에 팀원을 추가하여 각 팀원의 TodoList를 관리할 수 있습니다.

팀원의 TodoList에 할 일을 추가하여 완료 여부와 우선순위를 지정할 수 있으며, 해야할 일, 완료한 일, 우선순위 별로 필터링된 할 일 리스트를 확인하는 기능이 있습니다. 

  <br/>


## 📍**서비스 기능**

*→ 모든 요구사항 구현 완료.*

### **index.html 팀 페이지 요구사항**

1. 팀 추가하기
2. 팀 리스트 불러와서 화면에 보여주기

### **kanban.html 팀의 투두리스트 페이지 요구사항**

1. 팀에 멤버 추가하기
2. 팀원별 todoList 불러오기
3. 팀원별 todoItem 추가하기
4. 팀원별 todoItem 삭제하기
5. 팀원별 todoItem complete하기
6. 팀원별 todoItem contents 내용 수정하기
7. todoItem의 우선 순위 정하기 (defulat값:0, 1순위:1, 2순위: 2)
8. todoList의 우측 하단의 `전체 삭제`버튼을 누르면 해당 유저의 아이템을 전체 삭제하기

### **kanban.html 심화 요구사항**

1. todoItem의 우선 순위에 따라 정렬하기

  <br/>


## 📍설계

컴포넌트 단위로 로직을 나누어 구현하였습니다. 

### **컴포넌트 구조**
 <div width="100%" align="center">
  <img width="80%" alt="UI" src="https://user-images.githubusercontent.com/58355499/130121322-e33853e1-2b7b-4258-97ed-423630abda00.png"></div>
  <br/>

