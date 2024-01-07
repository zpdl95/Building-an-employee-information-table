class Table {
  /**
   * @constructor
   * @param {{name:string, title:string, email:string, role:string}[]} data
   */
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

    const tbody = document.createElement('tbody');
    this.data.slice(0, 5).forEach((d) => {
      const tbodyTr = displayTableData(d);
      tbody.appendChild(tbodyTr);
    });
    table.appendChild(tbody);
  }
}

export default Table;

/**
 * 테이블 row 한줄 생성
 *
 * 한줄씩 만드는 함수를 만들어 다른곳에도 사용
 * @param {{name:string, title:string, email:string, role:string}} data
 * @returns {HTMLTableRowElement}
 */
export const displayTableData = (data) => {
  const tr = document.createElement('tr');
  for (const [key, value] of Object.entries(data)) {
    const td = document.createElement('td');
    td.textContent = value;
    tr.appendChild(td);
  }
  return tr;
};

// import { createTableBody, createTableHead } from './TableHandler/createTable';

// class Table {
//   /**
//    * 테이블 생성
//    * @constructor
//    * @param {{name:string, title:string, email:string, role:string}[]} data
//    * @param {()=>number} getDropdownNum
//    * @param {()=>number} getPageNum
//    */
//   constructor(data, getDropdownNum, getPageNum) {
//     /** @type {{name:string, title:string, email:string, role:string}[]} */
//     this.table = document.createElement('table');
//     this.data = data;
//     this.getDropdownNum = getDropdownNum;
//     this.getPageNum = getPageNum;

//     this.render();
//   }

//   render() {
//     const tableColTitleList = Object.keys(this.data[0]);
//     const tableContainer = document.getElementById('table');
//     tableContainer.appendChild(this.table);
//     createTableHead(this.table, tableColTitleList);
//     createTableBody(
//       this.getDropdownNum(),
//       this.getPageNum(),
//       this.table,
//       this.data
//     );
//   }
// }
// export default Table;
