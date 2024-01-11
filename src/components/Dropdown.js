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
