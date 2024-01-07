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
        /** @type {{name:string, title:string, email:string, role:string}[]} */
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

// import Dropdown from './components/Dropdown';
// import Pagination from './components/Pagination';
// import Table from './components/Table';

// class App {
//   constructor() {
//     /** @type {{name:string, title:string, email:string, role:string}[]} */
//     this.data = [];
//     this.dropdownNum = 5;
//     this.pageNum = 1;
//     this.render();
//   }

//   async fetchData() {
//     const res = await fetch('/src/data.json');
//     const data = await res.json();
//     this.data = data;
//   }

//   changePageNum = (num) => {
//     this.pageNum = num;
//   };

//   getPageNum = () => this.pageNum;

//   changeDropdownNum = (num) => {
//     this.dropdownNum = num;
//   };

//   getDropdownNum = () => this.dropdownNum;

//   async render() {
//     await this.fetchData();
//     const table = new Table(this.data, this.getDropdownNum, this.getPageNum);
//     new Pagination(
//       this.data,
//       this.getDropdownNum,
//       this.getPageNum,
//       this.changePageNum,
//       table.table
//     );
//     new Dropdown(
//       this.changeDropdownNum,
//       this.getDropdownNum,
//       this.getPageNum,
//       table,
//       this.data
//     );
//   }
// }
// export default App;
