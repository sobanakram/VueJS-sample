Vue.component('product-item', {
    props: ['product'],
    template: '<li :class="{strikeout: product.purchased, priority: product.highPriority}">{{ product.label }}</li>'
})

var shoppingList = new Vue({
  el: "#shopping-list",
  data: {
    state: "default",
    header: "shopping list app",
    newItem: "",
    maxId: 3,
    items: [
      {
          id: 1,
        label: "10 party hats",
        purchased: false,
        highPriority: false
      },
      {
          id: 2,
        label: "2 board games",
        purchased: true,
        highPriority: false
      },
      {
          id: 3,
        label: "20 cups",
        purchased: false,
        highPriority: false
      }
    ]
  },
  computed: {
    reversedItems() {
      return this.items.slice(0).reverse();
    }
  },
  methods: {
    saveItem: function() {
      this.items.push({
          id: ++this.maxId,
        label: this.newItem.label,
        highPriority: this.newItem.highPriority,
        purchased: false
      });
      this.newItem = {
        label: "",
          highPriority: false
      };
    },
    changeState: function(newState) {
      this.state = newState;
      this.newItem = {
        label: "",
        highPriority: false
        }
    },
    togglePurchased: function(item) {
      item.purchased = !item.purchased;
    }
  }
});