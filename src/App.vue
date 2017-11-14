<template>
    <div class="container">
        <div id="page">
            <transition name="fade">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>

    export default{
        data(){
            return{

            }
        }
    }
</script>
