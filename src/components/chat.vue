<template>
    <div class="col-9 p-0">
        <div class="chat-bar" v-if="thisUser() !== undefined">
            <div class="top">
                <div class="left">
                    <img :src="messages().avatar" />
                    {{ messages().name }}
                <div class="right"></div>
            </div>
            </div>
        <div class="middle">
            <div>
                <div class="title">
                    Chat {{ messages().name }}

                    <p>
                        Tüm Mesajlaşmalar şifrelidir.
                        <i class="fa fa-lock"></i>
                    </p>
                </div>
                <div >
                    <div v-for="i in messages().messages" :key="i.id" >
                        <div :class="i.mode">
                            <p class="message">
                                {{ i.message }}

                                <span class="date">
                                    <i v-if="i.mode === 'send-message'" class="material-icons delete-message"
                                        @click="removeMessage({user: messages().id, index: i.id})"
                                    >delete</i>
                                    {{ i.date }}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="end">
            <i class="material-icons">insert_emoticon</i>
            <input type="text" v-model="messageValue"
            v-on:keydown.enter="sendMessage()" placeholder="Bir mesaj gönder...">
            <i class="fa fa-send" v-on:click="sendMessage()"></i>
        </div>
        </div>
        <div v-else class="hello">
            <div>
                <img src="https://marka-logo.com/wp-content/uploads/2020/05/WhatsApp-Logo.png" width="300"/>
                <h1>
                    Whatsapp'a Hoşgeldiniz.
                </h1>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
    data () {
        return {
            messageValue: ''
        }
    },
    methods: {
        ...mapGetters([
            'messages',
            'thisUser'
        ]),
        ...mapActions([
            'SEND_MESSAGE'
        ]),
        ...mapMutations([
            'removeMessage'
        ]),
        sendMessage () {
            if (this.messageValue !== '' && this.messageValue !== ' '){
                this.SEND_MESSAGE({
                    id: this.messages().messages.length,
                    date: `${new Date().getHours()}:${new Date().getMinutes()}`,
                    message: this.messageValue,
                    mode: 'send-message',
                })

                this.messageValue = ''
            }
        }
    }
}
</script>

<style lang="scss">
    .chat-bar {
        background: rgb(46, 46, 46);
        height: 95vh;
        padding: 0;
        .top {
            padding: 0.6rem;
            background: var(--grey);
            border: 1px solid var(--two-grey);
            height: 69px;

            .left {
                img {
                    width: 50px;
                    border-radius: 50%;
                    background: white;
                    padding: 5px;
                }
            }
        }
        .end {
            display: flex;
            align-items: center;
            position: absolute;
            bottom: -18px;
            left: 0; right: 0;
            background: var(--dark-grey);
            padding: 1rem;

            i {
                font-size: 30px;
                color: var(--text-grey);
            }

            i:last-child {
                margin-left: 15px;
            }
            i:first-child {
                margin-right: 15px;
            }

            input {
                width: 100%;
                border-radius: 30px;
                background: white;
                border: none;
                padding: 8px;
                padding-right: 3.5rem;
            }
        }
        .middle {
            display: flex;
            align-items: flex-end;
            height: calc(100% - 80px);
            .title {
                opacity: 0.9;
                width: 50%;
                margin: auto;
                background: var(--warning);
                border-radius: 4px;
                padding: 8px;
                text-align: center;
                margin-bottom: 4rem;
            }
            > div {
                padding: 3rem;
                overflow-y: auto;
                height: 100%;
                width: 100%;
                .get-message,
                .send-message {
                    width: 55%;

                    p {
                        word-wrap: break-word;
                        max-width: 100%;
                        padding: 3px 1rem 3px 1rem;
                        border-radius: 4px;
                        margin-bottom: 10px;
                        position: relative;

                        .date {
                            font-size: 80%;
                            margin-left: 1rem;
                            margin-top: 1rem;
                            color: var(--text-grey);
                            float: right;
                        }
                        .delete-message {
                            transition: 0.1s;
                            position: absolute;
                            right: 2px;
                            top: 0px;
                            cursor: pointer;
                        }
                        .delete-message:hover {
                            color: red;
                        }
                    }
                }
                .get-message {
                    float: left;
                    .message {
                        background: white;
                        float: left;

                        .date {
                            float: left;
                            margin-left: 0;
                            margin-right: 1rem;
                        }
                    }
                }
                .send-message {
                    float: right;
                    .message {
                        background: var(--green);
                        float: right;
                    }
                }
            }
        }
    }
    .hello {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        h1 {
            font-weight: 100;
        }
        div {
            text-align: center;
        }

        img {
            margin-bottom: 1.5rem;
        }
    }
</style>