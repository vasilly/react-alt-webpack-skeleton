import alt from '../alt';
import actions from '../actions/dummyActions';

class DummyStore {
  constructor() {
    this.text = 'some text';

    this.bindListeners({
      updateText: actions.updateText
    });
  }

  updateText(text) {
    this.text = text;
  }
}

export default alt.createStore(DummyStore, 'DummyStore');
