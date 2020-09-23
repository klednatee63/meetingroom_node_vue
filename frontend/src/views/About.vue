<template>

  <div class="about text-center">
    <img alt="Vue logo" src="../assets/logomeetingroom.png" class="rounded mx-auto d-block" ><br>

<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>

  </tbody>
</table>

  </div>

</template>

<script>
export default {
  mounted() {
    this.jquery('[data-toggle="popover"]').popover();
  }
};
</script>

<style scoped>
  button{
    margin: 5px;
  }
</style>
