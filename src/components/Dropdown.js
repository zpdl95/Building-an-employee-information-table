import Pagination from './Pagination';
import { displayTableData } from './Table';

class Dropdown {
  /**
   * @constructor
   * @param {{name:string, title:string, email:string, role:string}[]} data
   * @param {number[]} options
   */
  constructor(data, options) {
    this.data = data;
    this.options = options;

    this.render();
  }
  render() {
    const select = document.createElement('select');
    select.setAttribute('id', 'cntPerPage');
    for (const op of this.options) {
      const option = document.createElement('option');
      option.setAttribute('value', op);
      option.textContent = `${op}개씩`;
      select.appendChild(option);
    }
    document.getElementById('dropdown').appendChild(select);

    select.addEventListener('change', (e) => {
      const currentPage = 1;
      const pagePerCnt = e.target.value;
      const maxPageCnt = Math.ceil(this.data.length / pagePerCnt) + 2;

      new Pagination(this.data).setPaginationBtns(
        maxPageCnt,
        pagePerCnt,
        currentPage
      );

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

// import { remakePagination } from './PaginationHandler/remakePagination';
// import { createTableBody } from './TableHandler/createTable';

// class Dropdown {
//   /**
//    * @constructor
//    * @param {()=>void} changeDropdownNum
//    * @param {()=>number} getDropdownNum
//    * @param {()=>number} getPageNum
//    * @param {HTMLTableElement} table
//    * @param {{name:string, title:string, email:string, role:string}[]} data
//    */
//   constructor(changeDropdownNum, getDropdownNum, getPageNum, table, data) {
//     this.changeDropdownNum = changeDropdownNum;
//     this.getDropdownNum = getDropdownNum;
//     this.getgetPageNum = getPageNum;
//     this.table = table;
//     this.data = data;
//     this.optionList = [
//       ['5개씩', 5],
//       ['15개씩', 15],
//     ];

//     this.render();
//   }

//   render() {
//     const dropdownDiv = document.getElementById('dropdown');
//     const select = document.createElement('select');
//     const pagination = document.getElementById('pagination');
//     const buttonList = pagination.children;
//     select.addEventListener('change', (e) => {
//       this.changeDropdownNum(e.target.value);
//       remakePagination(
//         this.data.length,
//         this.getDropdownNum(),
//         buttonList,
//         pagination
//       );
//       createTableBody(
//         this.getDropdownNum(),
//         this.getgetPageNum(),
//         this.table,
//         this.data
//       );
//     });
//     this.optionList.forEach(([st, num]) => {
//       const option = document.createElement('option');
//       option.setAttribute('value', num);
//       option.textContent = st;
//       select.appendChild(option);
//     });
//     dropdownDiv.appendChild(select);
//   }
// }
// export default Dropdown;
