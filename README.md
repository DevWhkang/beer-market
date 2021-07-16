## FrontEnd Coding Test Template
안녕하세요,  
Tradir.io에 지원해주셔서 감사합니다.

Tradir.io 주니어 프론트엔드 개발자 코딩테스트 기본 템플릿입니다.  
해당 repository를 클론하셔서 아래 명시된 항목들만 완성해 주시면 됩니다.  
과제에만 집중하실수있게 기본적인 세팅은 미리 되어있습니다.

### Instructions

Use the following open api to get data for the table: https://api.punkapi.com/v2/beers  
The api returns a list of Beer Objects.

#### Required
* Redirect users to ``/home`` when they first arrive

* Create a Link to a ``/beerlist`` page on the homepage

* Create a page with a table for the list of Beers (use material table https://material-table.com/#/docs/get-started)
  - when a column header is drag and dropped, the new column order should be stored in redux so that the order is maintained even when a user moves between ``/home`` and ``/beerlist``

* When a beer name is clicked on, a modal should appear containing all the info of the selected beer (use ant-design)

#### Choose one
1. Create a Shopping basket to add and remove beers from
      - Shopping basket should be accessible from both ``/home`` and ``/beerlist``
2. Create a filter so that users can filter the beers by abv range
      - multiselecting should be available
  
#### Styling

* Use Styled Components to style your project
  
*Styling of the UI and consideration of UX will be taken into consideration  
*Additional features can be added if the tester wishes to display more than required
