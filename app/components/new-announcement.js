import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAnnouncement1() {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
        message: this.get('message')
      };
      this.sendAction('saveAnnouncement2', params);
    }
  }
});
