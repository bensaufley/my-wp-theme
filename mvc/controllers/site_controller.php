<?php

class SiteController extends ChesterBaseController {

  public function show() {
    $posts = ChesterWPCoreDataHelpers::getWordpressPostsFromLoop();
    if (isset($posts[0])) {
      $this->renderPage('post', array(
        'post' => $posts[0]
      ));
    }
  }

  public function index() {
    $posts = ChesterWPCoreDataHelpers::getWordpressPostsFromLoop();
    $this->renderPage('post_previews', array(
      'posts' => $posts,
      'next_posts_link' => get_next_posts_link(),
      'previous_posts_link' => get_previous_posts_link(),
    ));
  }

}

?>