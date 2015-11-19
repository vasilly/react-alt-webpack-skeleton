import alt from '../alt';

class DummyActions {
  updateText(text) {
    this.dispatch(text);
  }
}

export default alt.createActions(DummyActions);
