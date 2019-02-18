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
    chrome.webRequest.onCompleted.addListener((details) => {
      console.log(details);
    }, {
      types: ['websocket'],
      urls: ['<all_urls>']
    })
  }
}