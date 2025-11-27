export class LinkEventListener {
  private readonly linkEvent;
  private readonly callback;

  constructor(linkEvent, callback) {
    this.linkEvent = linkEvent;
    this.callback = callback;
  }

  remove = () => {
    this.linkEvent.remove(this.callback);
  };

  check = () => {
    this.linkEvent.check();
  };
}
