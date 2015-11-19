import alt from '../alt';
import DummyActions from '../actions/DummyActions';

class DummyStore {
  constructor() {
    this.text = 'some text';

    this.bindListeners({
      updateText: DummyActions.updateText
    });
  }

  updateText(text) {
    this.text = text;
  }
}

export default alt.createStore(DummyStore, 'DummyStore');
