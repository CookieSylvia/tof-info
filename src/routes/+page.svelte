<!--
    <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
-->

<script>
    import SimulacraCard from "$lib/components/simulacra-card.svelte"

    
</script>

<svelte:head>
  <title>Home | ToF Resources</title>
</svelte:head>

<h1>Tower of Fantasy Resources</h1>
<h6>Scuffed Edition</h6>
<p>
  We exclusivly use data from the Global version of Tower of Fantasy. Issues can be reported on
  <a
    href="https://github.com/ItemCookie/tof-info/issues"
    target="_blank"
    rel="noopener noreferrer nofollow">Github</a
  >.
</p>
<p>
    Enjoy this information database ad and tracker free!
</p>
<p>
  <!-- TODO: localize date string? -->
  Last updated {new Date().toLocaleDateString()}.
</p>

<!--TODO: automate this-->
<h2 id="banners">Banners</h2>
<table id="banner">
  <tr>
    <th>Main</th>
    <th>Reruns</th>
    <th>Start</th>
    <th>End</th>            
    <th>Time Remaining</th>
  </tr>
  <tr>
    <td>Fenrir</td>
    <td>Tian Lang</td>            
    <td>no clue</td>
    <!--TODO: localize according to user timezone-->            
    <td>29.03.23</td>
    <td>2 days</td>
  </tr>
</table>

<h2>Event Codes</h2>
<div class="center shittygrey">
<ul class="event-codes">
  <li>PIPIPIPEANUTS</li>
  <li>ITSUMOARIGATOU</li>
  <li>MIAGANBARUDESHI</li>
</ul>
</div>

<h3>Credits</h3>
<h4>Created by</h4>
<p>ItemCookie, Gugi</p>

<h4>Special thanks</h4>
<a class="center" target="_blank" rel="noopener noreferrer nofollow" href="https://toweroffantasy.info">toweroffantasy.info</a>

<style lang="css">

.center {
    display: flex;
  justify-content: center;
}
.shittygrey {    
  color: rgb(226, 222, 222);
}

h1 {
    padding-top: 3rem;
    padding-bottom: 1rem;
    font-size: 5rem;
}

h2 {
    font-size: 3rem;
    padding-top: 3rem;
    padding-bottom: 0.25rem;
}

h3 {
    font-size: 2rem;
    padding-top: 3rem;
    padding-bottom: 0.25rem;
}

h4 {
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 0.0025rem;
}

h6 {
  margin-top: -3rem;
  animation: 10s ease-in-out infinite alternate rotateee;
}

@keyframes rotateee {
  from {
    rotate: 0deg;
  }

  to {
    rotate: 360deg;
  }
}

p {    
    font-size: 1rem;
}

h1, h2, h3, h4, h6, p {
    display: flex;
  justify-content: center;
  color: #FFF;
} 

#banner {
  margin-left: auto;
  margin-right: auto;
  font-family: Arial, Helvetica, sans-serif;
  background-color: var(--element-bg-color);
  color: var(--element-volt-color);
  border: 2px solid var(--element-volt-color);
  border-collapse: collapse;
}

#banner td, #banner th {
  border: 1px solid var(--element-volt-color);
  border-collapse: collapse;
  padding: 8px;
}

#banner th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  color: var(--element-volt-color);
}

li {
  padding-top: 10px;
}
.event-codes {
  text-align: left;
  list-style: none;
}

</style>