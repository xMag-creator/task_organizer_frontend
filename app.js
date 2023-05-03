// Model
const model = {
  items: []
};

// View
const view = {
  renderList: function(items) {
    const container = document.getElementById('list-container');
    container.innerHTML = '';

    const ul = document.createElement('ul');
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.name;
      ul.appendChild(li);
    });

    container.appendChild(ul);
  }
};

// Controller
const controller = {
  init: function() {
    // fetch JSON data and update model
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        model.items = data;
        view.renderList(model.items);
      })
      .catch(error => console.error(error));
  }
};

controller.init();
