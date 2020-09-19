<template>
    <div class="users-bar col-3">
        <div class="top">
            <div class="left">
                <img :src="me().avatar" alt="">
            </div>
            <div class="right">
                <i class="fa fa-ellipsis-v"></i>
            </div>
        </div>
        <div class="search">
            <i class="fa fa-search"></i>
            <input type="text" placeholder="Arama veya yeni sohbet başlat"
            v-model="searchİtem" v-focus="focusRun()">
        </div>
        <div class="users">
            <div v-for="i in users()" :key="i.id" v-on:click="CHAT_MUTATİON(i.id)">
                <div v-if="i.id === thisUser() ? i.class = 'true' : true">
                    <div :class="i.class" class="user" v-if="!i.name.search(searchİtem)">
                        <div class="left">
                            <img :src="i.avatar">
                            <div class="info">
                                <span> {{ i.name }} </span><br>
                                <span> {{ i.last_message }} </span>
                            </div>
                        </div>
                        <div class="right">
                            data
                            <div>
                                <i class="fa fa-angle-down"></i>
                                <div class="open-user-more">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'

export default {
    data () {
        return {
            searchİtem: ''
        }
    },
    methods: {
        ...mapGetters([
            'users',
            'me',
            'thisUser'
        ]),
        ...mapActions([
            'CHAT_MUTATİON'
        ]),
        ...mapMutations([
            'asd'
        ]),
        focusRun () {
            console.log('Hello World')
        }
    },
}
</script>

<style lang="scss">
    .users-bar {
        padding: 0;
        background: var(--grey);
        height: 97vh;
        font-weight: 100;
        .top {
            padding: 0.6rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border: 1px solid var(--two-grey);
            border-right: none;
            height: 70px;
            img {
                width: 45px;
                border-radius: 50%;
            }

            .right {
                font-size: 20px;
            }
        }
        .search {
            background: var(--two-grey);
            width: 100%;
            border-bottom: 1px solid rgb(228, 228, 228);
            padding: 8px;
            position: relative;

            i {
                position: absolute;
                left: 8%;
                top: 33%;
                color: var(--text-grey);
            }
            input {
                border-radius: 30px;
                width: 100%;
                border: 1px solid var(--grey);
                padding: 10px;
                padding-left: 2.5rem;
                font-size: 14.5px;
            }
        }
        .users {
            overflow-y: auto;
            background: white;
            height: 81%;
            border-right: 1px solid var(--grey);
            .user {
                display: flex;
                justify-content: space-between;
                padding: 10px;
                border-bottom: 1px solid var(--grey);
                img {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                .right {
                    color: var(--text-grey);
                    text-align: center;
                }
                .left {
                    display: flex;
                    align-items: center;

                    .info {
                        margin-left: 10px;
                        font-weight: 400;

                        span:first-child {
                            font-size: 18px;
                        }
                        span:last-child {
                            color: var(--text-grey);
                            font-size: 14px;
                        }
                    }
                }
            }:hover {
                background: rgb(248, 248, 248);
                cursor: pointer;
            }
        }
    }
    .true {
        background: rgb(238, 238, 238);
    }
</style>