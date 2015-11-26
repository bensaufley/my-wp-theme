<?php

add_theme_support( 'post-formats', array( 'aside', 'link', 'image', 'quote', 'video' ) );
remove_action('wp_head', 'wp_generator');

require_once(dirname(__FILE__).'/lib/Chester/require.php');

?>