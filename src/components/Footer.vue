<template>
  <div class="grid">
    <div class="flex flex-col">
      <a class="flex px-52">NEWSLETTER </a>
      <a class="flex px-36">h4tle likes to send you emails</a>
    </div>
    <div class="w-full grid grid-cols-1">
      <div class="col-start-1">
        <div class="mx-right max-w-md mt-12">
          <div class="flex flex-cols justify-start px-44">
            <input
              v-model="email"
              type="text"
              placeholder="Email"
              class="w-52 mx-auto text-l py-2 px-3 rounded bg-htle_yellow placeholder-htle_sidebar"
            />
            <input
              v-model="name"
              type="text"
              placeholder="Navn"
              class="w-52 mx-auto text-l py-2 px-3 rounded my-3 bg-htle_yellow placeholder-htle_sidebar"
            />
          </div>
        </div>
        <div class="grid grid-cols-4">
          <button
            class="text-htle_sidebar font-bold py-2 px-18 rounded border w-32 place-self-center mt-4"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
    <div class="w-full grid grid-cols-2">
      <div class="col-start-2 text-9xl">|</div>
    </div>
    <div class="w-full grid grid-cols-2">
      <div class="col-start-3 text-xl">Contact me</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>