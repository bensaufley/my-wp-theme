<?php

add_theme_support( 'post-formats', array( 'aside', 'link', 'image', 'quote', 'video' ) );
remove_action('wp_head', 'wp_generator');

add_action('wp_enqueue_scripts', 'no_more_jquery');
function no_more_jquery(){
  wp_deregister_script('jquery');
}

require_once(dirname(__FILE__).'/lib/Chester/require.php');

?>