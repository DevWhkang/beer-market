# Tradir.io 주니어 프론트엔드 개발자 코딩 과제를 위한 저장소 입니다.

<details>
<summary>과제 내용</summary>


## FrontEnd Coding Test Template

안녕하세요, 
Tradir.io에 지원해 주셔서 감사합니다.

Tradir.io 주니어 프론트엔드 개발자 코딩 테스트 기본 템플릿입니다.  
해당 repository를 클론 하셔서 아래 명시된 항목들만 완성해 주시면 됩니다.  
과제에만 집중하실 수 있게 기본적인 세팅은 미리 되어있습니다.

### Instructions

Use the following open api to get data for the table: https://api.punkapi.com/v2/beers  
The api returns a list of Beer Objects.

#### Styling

* Use Styled Components to style your project
* Ant Design can be used for basic components (https://ant.design/components/overview/)

#### Required

* Redirect users to ``/home`` when they first arrive

* Create a Link to a ``/beerlist`` page on the homepage

* Create a page with a table for the list of Beers (material table can be used https://material-table.com/#/docs/get-started)
  - when a column header is drag and dropped, the new column order should be stored in redux so that the order is maintained even when a user moves between ``/home`` and ``/beerlist``

* When a beer name is clicked on, a modal should appear containing all the info of the selected beer

* Create a filter so that users can filter the beers by ``abv`` range ex)"5-6", "6-7"
  - multiselection should be available

#### Optional

* Create a Shopping basket to add and remove beers from  
  - Shopping basket should be accessible from both ``/home`` and ``/beerlist``

### Grading Standards

* Completion of the required functionalities(50%)
* Code Quality (35%)
* UI/UX Design (15%)

*Additional features can be added if the tester wishes to display more than the required functionalities

과제 진행 중 추가적인 문의 사항이 있으실 경우, 언제든지 편하게 연락 주시기 바랍니다.
</details>

# Screenshot
### Home page

![스크린샷 2021-07-21 오후 11 13 22](https://user-images.githubusercontent.com/56540563/126503942-2aac1c54-3992-4848-9a60-873fe07ea5dc.png)


### Beer list page

![스크린샷 2021-07-21 오후 11 13 33](https://user-images.githubusercontent.com/56540563/126503976-067d36f1-134e-49b8-93b9-a0913df4e6ca.png)


### Beer Detail modal

![스크린샷 2021-07-21 오후 11 13 44](https://user-images.githubusercontent.com/56540563/126504036-80ac4cf7-e5b0-48e3-9eb3-b977dc640b08.png)
