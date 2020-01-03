<template>
  <div class="home">
    <h3>Assumptions:</h3>
    <ul>
      <li>No authentication: restricting access based on user or admin. Just implment one page.</li>
      <li>Predefined : UserId on EmployeeView</li>
      <li>If you delete Employee, the Review associated with this Employee will not be removed.</li>
      <li>In server side, to avoid CORS issue, allow access to endpoint from all</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
  }
}
</script>
