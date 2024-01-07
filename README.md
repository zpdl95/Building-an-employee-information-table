# [프로그래머스 과제테스트 연습] 사원 정보 테이블 구축{2022 Dev-Matching: 웹 프론트엔드 개발자(하반기)-2}

<ol style='border:1px solid; border-radius:10px'>
<li style='font-size:2rem'><a href='#예시'>예시</a></li>
<li style='font-size:2rem'><a href='#파일구조'>파일구조</a></li>
<li style='font-size:2rem'><a href='#문제-1'>문제 1</a></li>
<li style='font-size:2rem'><a href='#문제-2'>문제 2</a></li>
<li style='font-size:2rem'><a href='#문제-3'>문제 3</a></li>
<li style='font-size:2rem'><a href='#문제-4'>문제 4</a></li>
</ol>

<hr/>

## 예시

<h2>Grepp Enterprise</h2>

<select style='position:relative; left:92%;'><option>5개씩</option><option>15개씩</option></select>

<table style='width:100%; text-align:center; color:black;'>
    <thead>
        <tr style='background:lightgray; font-weight:bold; '>
            <td style='border: 1px solid #dddddd;'>name</td>
            <td style='border: 1px solid #dddddd;'>title</td>
            <td style='border: 1px solid #dddddd;'>email</td>
            <td style='border: 1px solid #dddddd;'>role</td>
        </tr>
    </thead>
    <tbody>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name1</td>
            <td style='border: 1px solid #dddddd;'>Designer</td>
            <td style='border: 1px solid #dddddd;'>jade@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name2</td>
            <td style='border: 1px solid #dddddd;'>Front-End Developer</td>
            <td style='border: 1px solid #dddddd;'>sabastian@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name3</td>
            <td style='border: 1px solid #dddddd;'>Director</td>
            <td style='border: 1px solid #dddddd;'>antony@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name4</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>gilbert@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Member</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name5</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
    </tbody>
</table>

<div style='width:100%; display:flex; justify-content:center; gap:4%;'>
    <span style='color:red'><<</span>
    <span style='color:red'>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span style='color:red'>>></span>
</div>

> 맨 위에 있는 title 행도 'name2' 가 표기된 행과 같은 배경색상이다
> 페이지 맨 앞 화살표와 맨뒤 화살표 그리고 1번은 빨간색이다

<hr/>

## 파일구조

> 아래와 같이 파일 구조를 변경하고 진행 하겠습니다.

    src
    |  |___components
    |  |___App.js
    |
    index.html
    |
    index.js
    |
    style.css

> src 폴더 안에 `App.js` 파일을 생성 후, 다음과 같이 코드를 작성합니다.

```js
// src > App.js
class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }
  render() {}
}
export default App;
```

```js
// index.js
import App from './src/App';

new App(document.querySelector('.App'));
```

<hr/>

## 문제 1

- 모든 사원의 정보를 불러와 페이지에 테이블 형태로 나타냄

### 요구사항1

- JSON 형태로 전달받은 모든 사원의 정보를 불러온다.
- 모든 사원의 정보는 JSON 형태로 있으며, `src/data` 위치에 있다.
- 데이터는 배열 형태로 구성, 각각의 객체는 _name_, _title_, _email_, _role_ 으로 구성됨
- 데이터는 _"name"_ 을 기준으로 오름차순 정렬됨. 데이터를 불러올 때 정렬을 유지해야함
- [힌트] 자바스크립트의 내장 라이브러리 함수인 `fetch` 등을 사용하여 데이터를 불러옴

> JSON 형태의 사원 정보를 가져오는 코드를 작성하겠습니다.

```js
// src > App.js
class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }
  async render() {
    try {
      const res = await fetch('/src/data.json');
      if (res.ok) {
        const data = await res.json();
      }
    } catch (error) {
      console.log(error);
    }
  }
}
```

### 요구사항2

- 총 4개의 열로 구성된 테이블 구현
- 각 열의 제목(th-table heading)은 _name_, _title_, _email_, _role_ 이다.
- 각 열의 항목은 JSON 데이터에서 일치하는 key값에 해당하는 value값으로 구성.
- 예시. 열의 제목이 _"name"_ 인 경우, 열의 항목은 JSON 데이터의 _"name"_ key값의 value값인 _"name1, name2, ..."_ 으로 구성함.
- [힌트] 테이블을 그릴 수 있는 `<table>`, `<thead>`, `<tbody>`, `<th>`, `<tr>`, `<td>` 태그 등을 적절히 사용하라. 그리고 테이블의 셀 제목과 셀 내용은 행(tr-table row) 내부에 포함되어야 함.

> components 폴더 안에 `Table.js` 를 생성 후, 다음과 같이 코드를 작성합니다.

```js
// src > components > Table.js
class Table {
  constructor(data) {
    this.data = data;
    this.render();
  }
  render() {}
}
export default Table;
```

```js
// src > App.js
import Table from './components/Table';

class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }

  async render() {
    try {
      const res = await fetch('/src/data.json');
      if (res.ok) {
        const data = await res.json();
        new Table(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
```

> 이제 `Table.js` 컴포넌트에서 table요소를 생성해 봅시다.

```js
// src > components > Table.js
class Table {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {
    const table = document.createElement('table');
    document.getElementById('table').appendChild(table);
  }
}
```

> 다음 table의 헤더 영역을 만들어 보겠습니다.

```js
// src > components > Table.js
class Table {
  constructor(data) {
    this.data = data;
    this.render();
  }

  displayTableHead = () => {
    const thead = document.createElement('thead');
    const theadTr = document.createElement('tr');
    const tableColTitleList = Object.keys(this.data[0]);
    tableColTitleList.forEach((title) => {
      const th = document.createElement('th');
      th.textContent = title;
      theadTr.appendChild(th);
    });
    thead.appendChild(theadTr);
    return thead;
  };

  render() {
    const table = document.createElement('table');
    document.getElementById('table').appendChild(table);

    const thead = this.displayTableHead();
    table.appendChild(thead);
  }
}
```

> displayTableHead 이름의 멤버함수를 정의해서 헤더부분을 만들어 줬습니다.

> table의 데이터가 출력될 바디 영역을 만들어 보겠습니다.

```js
// src > components > Table.js
class Table {
  constructor(data) {
    this.data = data;
    this.render();
  }

  displayTableHead = () => {
    ...
  };

  render() {
    const table = document.createElement('table');
    document.getElementById('table').appendChild(table);

    const thead = this.displayTableHead();
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    this.data.slice(0, 5).forEach((d) => {
      const tbodyTr = displayTableData(d);
      tbody.appendChild(tbodyTr);
    });
    table.appendChild(tbody);
  }
}

export default Table;

export const displayTableData = (data) => {
  const tr = document.createElement('tr');
  for (const [key, value] of Object.entries(data)) {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  }
  return tr;
};
```

> table의 데이터 부분은 페이지가 변할때, 드롭다운의 값이 변할때에 사용되는 부분으로 displayTableData 이름의 함수로 작성해 재사용 가능하게 만들었습니다. 이 함수는 데이터의 value값을 가져와 row 한줄을 생성하는 함수입니다.

<hr/>

## 문제 2

<table style='width:100%; text-align:center; color:black;'>
    <thead>
        <tr style='background:lightgray; font-weight:bold; '>
            <td style='border: 1px solid #dddddd;'>name</td>
            <td style='border: 1px solid #dddddd;'>title</td>
            <td style='border: 1px solid #dddddd;'>email</td>
            <td style='border: 1px solid #dddddd;'>role</td>
        </tr>
    </thead>
    <tbody>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name1</td>
            <td style='border: 1px solid #dddddd;'>Designer</td>
            <td style='border: 1px solid #dddddd;'>jade@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name2</td>
            <td style='border: 1px solid #dddddd;'>Front-End Developer</td>
            <td style='border: 1px solid #dddddd;'>sabastian@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name3</td>
            <td style='border: 1px solid #dddddd;'>Director</td>
            <td style='border: 1px solid #dddddd;'>antony@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name4</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>gilbert@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Member</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name5</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
    </tbody>
</table>

- 위 그림처럼 되도록 테이블의 스타일을 적용

### 요구사항1

- 테이블의 기본 색상은 흰색이다.
- 테이블의 헤더 영역의 배경색은 회색(예. `lightgray`)이다.
- 테이블 헤더를 제외한 데이터 영역에서 짝수 행의 배경색은 회색(예. `lightgray`)이다.

> 테이블의 색상을 설정하겠습니다.

```css
/* style.css */
thead {
  background-color: lightgray;
}

tbody tr:nth-child(even) {
  background-color: lightgray;
}
```

### 요구사항2

- 테이블의 모든 글자는 가운데 정렬.
- 테이블의 헤더 영역의 글자는 굵게 표시.

> 테이블의 글자 스타일을 설정하겠습니다.

```css
/* style.css */
table {
  text-align: center;
}
```

```js
// src > components > Table.js
class Table {
  constructor(data) {
    ...
  }

  displayTableHead = () => {
    const thead = document.createElement('thead');
    const theadTr = document.createElement('tr');
    const tableColTitleList = Object.keys(this.data[0]);
    tableColTitleList.forEach((title) => {
      const th = document.createElement('th');
      th.textContent = title;
      theadTr.appendChild(th);
    });
    thead.appendChild(theadTr);
    return thead;
  };

  render() {
    ...
  }
}
```

> 위 처럼 테이블 헤더를 생성할때 `th` element 사용하면 자동으로 텍스트를 굵게 표시합니다.

<hr/>

## 문제 3

- 테이블의 가독성을 높이기 위해 테이블의 데이터의 목록을 적당한 개수로 나누어 나타냄.
<table style='width:100%; text-align:center; color:black;'>
    <thead>
        <tr style='background:lightgray; font-weight:bold; '>
            <td style='border: 1px solid #dddddd;'>name</td>
            <td style='border: 1px solid #dddddd;'>title</td>
            <td style='border: 1px solid #dddddd;'>email</td>
            <td style='border: 1px solid #dddddd;'>role</td>
        </tr>
    </thead>
    <tbody>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name1</td>
            <td style='border: 1px solid #dddddd;'>Designer</td>
            <td style='border: 1px solid #dddddd;'>jade@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name2</td>
            <td style='border: 1px solid #dddddd;'>Front-End Developer</td>
            <td style='border: 1px solid #dddddd;'>sabastian@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name3</td>
            <td style='border: 1px solid #dddddd;'>Director</td>
            <td style='border: 1px solid #dddddd;'>antony@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name4</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>gilbert@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Member</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name5</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
    </tbody>
</table>

<div style='width:100%; display:flex; justify-content:center; gap:4%;'>
    <span style='color:red'><<</span>
    <span style='color:red'>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span style='color:red'>>></span>
</div>

- 기본적으로 페이지당 5개의 데이터 항목이 보이고, 페이지 번호는 1부터 5까지 총 5개의 번호로 구성됨.
- 페이지 이동은 페이지 번호 버튼을 통해서만 이루어짐. (화살표로 페이지 이동이 이루어지면 안됨.)
- 좌측과 우측의 화살표 버튼(`<<`, `>>`)을 통해 첫 번째 페이지와 마지막 페이지로 이동이 가능함.
- 현재 페이지의 위치를 명확하게 나타내기 위해 현재 보고 있는 페이지에 해당하는 번호는 빨간색으로 표시, 나머지 페이지 번호는 검은색으로 표시.

> components 폴더 안에 `Pagination.js` 를 생성후 `App.js` 에 추가합니다.

```js
// src > components > Pagination.js
class Pagination {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {}
}
export default Pagination;
```

```js
// src > App.js
import Pagination from './components/Pagination';
import Table from './components/Table';

class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }

  async render() {
    try {
      const res = await fetch('/src/data.json');
      if (res.ok) {
        const data = await res.json();
        new Table(data);
        new Pagination(data);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;
```

> 페이지 번호를 생성하겠습니다.

```js
// src > components > Pagination.js
class Pagination {
  constructor(data) {
    this.data = data;
    this.render();
  }

  setPaginationBtns = (maxPageCnt, pagePerCnt, currentPage) => {
    document.getElementById('pagination').innerHTML = '';

    for (let index = 0; index < maxPageCnt; index++) {
      const button = document.createElement('button');
      if (index === 0) {
        button.setAttribute('class', 'arrow');
        button.textContent = '<<';
      } else if (index === maxPageCnt - 1) {
        button.setAttribute('class', 'arrow');
        button.textContent = '>>';
      } else if (index === currentPage) {
        button.classList.add('active');
        button.textContent = index;
      } else {
        button.textContent = index;
      }

      document.getElementById('pagination').appendChild(button);
    }
  };

  render() {
    const currentPage = 1;
    const pagePerCnt = 5;
    const maxPageCnt = Math.ceil(this.data.length / pagePerCnt) + 2;
    this.setPaginationBtns(maxPageCnt, pagePerCnt, currentPage);
  }
}

export default Pagination;
```

> 초기값으로 현재 페이지, 페이지당 보여질 데이터 수, 최대 페이지 수를 설정하고 `setPaginationBtns` 함수를 호출합니다.

### 요구사항1

- 특정 페이지 번호를 선택했을 때, 선택된 페이지 번호는 빨간색으로 표시. 나머지는 검은색으로 표시.
- 선택된 페이지 번호에 해당하는 페이지의 데이터 목록이 보임.

### 요구사항2

- 좌측의 화살표 버튼(`<<`)을 클릭했을 때, 첫 번째 페이지 번호(숫자 1)의 버튼이 빨간색으로 표시됨.
- 첫 번째 페이지의 데이터 목록이 보임.

### 요구사항3

- 우측의 화살표 버튼(`>>`)을 클릭했을 때, 마지막 페이지 번호의 버튼이 빨간색으로 표시됨.
- 마지막 페이지의 데이터 목록이 보임

> 요구사항 1,2,3이 비슷한 내용이므로 한번에 설명하겠습니다.

```js
// src > components > Pagination.js
import { displayTableData } from './Table';

class Pagination {
  constructor(data) {
    ...
  }

  paginationBtnsStyle = (target) => {
    const buttons = document.querySelectorAll('#pagination button');
    buttons.forEach((btn) => {
      if (btn.textContent == target.textContent) btn.classList.add('active');
      if (target.textContent == '<<') buttons[1].classList.add('active');
      if (target.textContent == '>>')
        buttons[buttons.length - 2].classList.add('active');
      if (btn.textContent != target.textContent) btn.classList.remove('active');
    });
  };

  paginationBtnClicked = (pagePerCnt, currentPage, target) => {
    const start = pagePerCnt * (currentPage - 1);
    const end = pagePerCnt * currentPage;

    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    this.data.slice(start, end).forEach((d) => {
      const tr = displayTableData(d);
      tbody.appendChild(tr);
    });

    this.paginationBtnsStyle(target);
  };

  setPaginationBtns = (maxPageCnt, pagePerCnt, currentPage) => {
    document.getElementById('pagination').innerHTML = '';

    for (let index = 0; index < maxPageCnt; index++) {
      const button = document.createElement('button');
      ...

      button.addEventListener('click', (e) => {
        if (e.target.textContent == '<<') currentPage = 1;
        else if (e.target.textContent == '>>') currentPage = maxPageCnt - 2;
        else currentPage = e.target.textContent;

        this.paginationBtnClicked(pagePerCnt, currentPage, e.target);
      });

      document.getElementById('pagination').appendChild(button);
    }
  };

  render() {
    ...
  }
}

export default Pagination;
```

> `setPaginationBtns` 함수로 페이지 번호를 생성하면서 클릭이벤트를 등록합니다. `paginationBtnClicked` 함수는 버튼을 클릭하면 해당하는 데이터를 보여주고 `paginationBtnsStyle` 함수를 호출해 버튼의 색상을 변경합니다.

<hr/>

## 문제 4

- 테이블 상단에는 페이지당 보일 데이터 항목의 개수를 선택할 수 있는 드롭다운(Drop-down)을 구현.

<select style='position:relative; left:92%;'><option>5개씩</option><option>15개씩</option></select>

<table style='width:100%; text-align:center; color:black;'>
    <thead>
        <tr style='background:lightgray; font-weight:bold; '>
            <td style='border: 1px solid #dddddd;'>name</td>
            <td style='border: 1px solid #dddddd;'>title</td>
            <td style='border: 1px solid #dddddd;'>email</td>
            <td style='border: 1px solid #dddddd;'>role</td>
        </tr>
    </thead>
    <tbody>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name1</td>
            <td style='border: 1px solid #dddddd;'>Designer</td>
            <td style='border: 1px solid #dddddd;'>jade@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name2</td>
            <td style='border: 1px solid #dddddd;'>Front-End Developer</td>
            <td style='border: 1px solid #dddddd;'>sabastian@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name3</td>
            <td style='border: 1px solid #dddddd;'>Director</td>
            <td style='border: 1px solid #dddddd;'>antony@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name4</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>gilbert@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Member</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name5</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
    </tbody>
</table>

<div style='width:100%; display:flex; justify-content:center; gap:4%;'>
    <span style='color:red'><<</span>
    <span style='color:red'>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span style='color:red'>>></span>
</div>

> components 폴더 안에 `Dropdown.js` 를 생성하고 `App.js` 에서 호출하겠습니다.

```js
// src > components > Dropdown.js
class Dropdown {
  constructor(data, options) {
    this.data = data;
    this.options = options;
    this.render();
  }
  render() {}
}
export default Dropdown;
```

> 드롭다운 시 보여질 데이터가 변경되야하므로 data변수를 받아오고, 드롭다운에 사용될 옵션을 받아오겠습니다.

```js
// src > App.js

import Dropdown from './components/Dropdown';
import Pagination from './components/Pagination';
import Table from './components/Table';

class App {
  constructor($app) {
    this.$app = $app;
    this.render();
  }

  async render() {
    try {
      const res = await fetch('/src/data.json');
      if (res.ok) {
        const data = await res.json();
        new Table(data);
        new Pagination(data);
        const options = [5, 15];
        new Dropdown(data, options);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default App;
```

> 데이터와 드롭다운의 옵션인 5개씩,15개씩에 해당하는 숫자 5,15를 배열로 드롭다운에 넘겨주겠습니다.

### 요구사항1

- 드롭다운 선택 시 페이지당 보일 항목의 개수를 선택할 수 있는 목록(예. '5개씩', '15개씩')을 제공.

> `App.js` 에서 받아온 옵션으로 목록을 생성하겠습니다.

```js
// src > components > Dropdown.js
class Dropdown {
  constructor(data, options) {
    this.data = data;
    this.options = options;
    this.render();
  }

  render() {
    const select = document.createElement('select');
    select.setAttribute('id', 'cntPerPage');
    for (let i in this.options) {
      const option = document.createElement('option');
      option.setAttribute('value', this.options[i]);
      option.appendChild(document.createTextNode(this.options[i] + '개씩'));
      select.appendChild(option);
    }

    document.getElementById('dropdown').appendChild(select);
  }
}
export default Dropdown;
```

### 요구사항2

- 드롭다운 메뉴 중 하나를 선택하면 선택한 항목에 맞게 테이블 하단의 페이지 번호의 개수가 변경되어야함.(단, 선택 목록이 바뀔 때마다 현재 페이지 번호는 첫 번째 페이지 번호로 초기화되어야 함.)
- 예시 1. 드롭다운의 첫 번째 메뉴(예. '5개씩')를 선택한 경우, 페이지 번호는 총 5개의 번호(숫자 1~5)로 구성됨.
<div style='width:100%; display:flex; justify-content:center; gap:4%; border:1px solid'>
    <span style='color:red'><<</span>
    <span style='color:red'>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span style='color:red'>>></span>
</div>

- 예시 2. 드롭다운의 두 번째 메뉴(예. '15개씩')선택한 경우, 페이지 번호는 총 2개의 번호(숫자1~2)로 구성됨.

<div style='width:100%; display:flex; justify-content:center; gap:4%; border:1px solid'>
    <span style='color:red'><<</span>
    <span style='color:red'>1</span>
    <span>2</span>
    <span style='color:red'>>></span>
</div>

<br/>

> change 이벤트를 등록한 뒤 `Pagination` 컴포넌트를 호출해서 새로운 페이지 번호를 생성해 줍니다.

```js
// src > components > Dropdown.js

import Pagination from './Pagination';
import { displayTableData } from './Table';

class Dropdown {
  constructor(data, options) {
    this.data = data;
    this.options = options;
    this.render();
  }
  render() {
    const select = document.createElement('select');
    ...

    select.addEventListener('change', (e) => {
      const currentPage = 1;
      const pagePerCnt = e.target.value;
      const maxPageCnt = Math.ceil(this.data.length / pagePerCnt) + 2;

      new Pagination(this.data).setPaginationBtns(
        maxPageCnt,
        pagePerCnt,
        currentPage
      );

      ...
    });
  }
}

export default Dropdown;
```

### 요구사항3

- 드롭다운 메뉴 중 하나를 선택하면 선택한 항목에 맞게 테이블의 데이터 영역에 노출되는 데이터 항목의 개수가 변경되어야함.(단, 선택 목록이 바뀔 때마다 첫 페이지의 데이터 목록이 보여야함.)
- 예시 1. 드롭다운의 첫 번째 메뉴(예. '5개씩')를 선택한 경우, 1페이지부터 5페이지까지 각 페이지의 데이터 항목 개수는 5개임.

<select style='position:relative; left:92%;'><option>5개씩</option></select>

<table style='width:100%; text-align:center; color:black;'>
    <thead>
        <tr style='background:lightgray; font-weight:bold; '>
            <td style='border: 1px solid #dddddd;'>name</td>
            <td style='border: 1px solid #dddddd;'>title</td>
            <td style='border: 1px solid #dddddd;'>email</td>
            <td style='border: 1px solid #dddddd;'>role</td>
        </tr>
    </thead>
    <tbody>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name1</td>
            <td style='border: 1px solid #dddddd;'>Designer</td>
            <td style='border: 1px solid #dddddd;'>jade@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name2</td>
            <td style='border: 1px solid #dddddd;'>Front-End Developer</td>
            <td style='border: 1px solid #dddddd;'>sabastian@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name3</td>
            <td style='border: 1px solid #dddddd;'>Director</td>
            <td style='border: 1px solid #dddddd;'>antony@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name4</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>gilbert@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Member</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name5</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
    </tbody>
</table>

<div style='width:100%; display:flex; justify-content:center; gap:4%;'>
    <span style='color:red'><<</span>
    <span style='color:red'>1</span>
    <span>2</span>
    <span>3</span>
    <span>4</span>
    <span>5</span>
    <span style='color:red'>>></span>
</div>

- 예시 2. 드롭다운의 두 번째 메뉴(예. '15개씩')선택한 경우, 1페이지를 선택했을 때 보이는 데이터 항목의 개수는 15개임. 그리고 마지막 페이지(2페이지)를 선택했을 때 보이는 데이터 항목의 개수는 10개임.

<select style='position:relative; left:92%;'><option>15개씩</option></select>

<table style='width:100%; text-align:center; color:black;'>
    <thead>
        <tr style='background:lightgray; font-weight:bold; '>
            <td style='border: 1px solid #dddddd;'>name</td>
            <td style='border: 1px solid #dddddd;'>title</td>
            <td style='border: 1px solid #dddddd;'>email</td>
            <td style='border: 1px solid #dddddd;'>role</td>
        </tr>
    </thead>
    <tbody>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name1</td>
            <td style='border: 1px solid #dddddd;'>Designer</td>
            <td style='border: 1px solid #dddddd;'>jade@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name2</td>
            <td style='border: 1px solid #dddddd;'>Front-End Developer</td>
            <td style='border: 1px solid #dddddd;'>sabastian@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name3</td>
            <td style='border: 1px solid #dddddd;'>Director</td>
            <td style='border: 1px solid #dddddd;'>antony@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Owner</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name4</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>gilbert@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Member</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name5</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name6</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name7</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name8</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name9</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name10</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name11</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name12</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name13</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:lightgray'>
            <td style='border: 1px solid #dddddd;'>name14</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
        <tr style='background:white'>
            <td style='border: 1px solid #dddddd;'>name15</td>
            <td style='border: 1px solid #dddddd;'>Full-Stack Developer</td>
            <td style='border: 1px solid #dddddd;'>lucy@grepp.co</td>
            <td style='border: 1px solid #dddddd;'>Admin</td>
        </tr>
    </tbody>
</table>

<div style='width:100%; display:flex; justify-content:center; gap:4%;'>
    <span style='color:red'><<</span>
    <span style='color:red'>1</span>
    <span>2</span>
    <span style='color:red'>>></span>
</div>

> change 이벤트 함수에서 `Table.js` 에서 정의한 `displayTableData` 함수를 사용해 테이블 바디를 변경해주겠습니다.

```js
// src > components > Dropdown.js

import Pagination from './Pagination';
import { displayTableData } from './Table';

class Dropdown {
  constructor(data, options) {
    ...
  }
  render() {
    ...

    select.addEventListener('change', (e) => {
      const currentPage = 1;
      const pagePerCnt = e.target.value;
      const maxPageCnt = Math.ceil(this.data.length / pagePerCnt) + 2;

      ...

      const start = pagePerCnt * (currentPage - 1);
      const end = pagePerCnt * currentPage;

      const tbody = document.querySelector('tbody');
      tbody.innerHTML = '';

      this.data.slice(start, end).forEach((d) => {
        const tr = displayTableData(d);
        tbody.appendChild(tr);
      });
    });
  }
}

export default Dropdown;
```

> 선택값이 변경되면 현재 페이지를 1번으로 변경하고 변경된 선택값에 따라 데이터를 슬라이싱하여 보여줍니다.
