import Dropdown from './components/Dropdown';
import Pagination from './components/Pagination';
import Table from './components/Table';
import dataJson from './data.json?url';

class App {
  constructor($app) {
    this.$app = $app;

    this.render();
  }

  async render() {
    try {
      // const res = await fetch('/src/data.json');
      const res = await fetch(dataJson);
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
