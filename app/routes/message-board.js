import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('announcement');
  },
  actions: {
    saveAnnouncement3(params) {
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('message-board');
    },
    destroyMessage(announcement) {
      announcement.destroyRecord();
      this.transitionTo('message-board');
    }

  }
});
