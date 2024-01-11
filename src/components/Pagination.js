import { displayTableData } from './Table';

class Pagination {
  /**
   * @constructor
   * @param {{name:string, title:string, email:string, role:string}[]} data
   */
  constructor(data) {
    this.data = data;

    this.render();
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
    const currentPage = 1;
    const pagePerCnt = 5;
    const maxPageCnt = Math.ceil(this.data.length / pagePerCnt) + 2;
    this.setPaginationBtns(maxPageCnt, pagePerCnt, currentPage);
  }
}

export default Pagination;
