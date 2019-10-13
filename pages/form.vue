<template>
  <div>
    <h2>This is form page.</h2>
    <form method="post" action="/api/togo/add">
      <input type="text" name="message" />
      <input type="submit" value="送信" />
    </form>
  </div>
</template>

<script>
export default {};
</script>