export class SocketListener {
  private static instance: SocketListener;

  private constructor() {
    // get to listening
  }

  static create() {
    if (!SocketListener.instance) {
      SocketListener.instance = new SocketListener();
    }

    return SocketListener.instance;
  }

  public start() {
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      console.log(request);
    })
  }
}