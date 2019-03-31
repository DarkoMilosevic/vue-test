<template>
    <div class="row col-md-12">
        <div :class="'text-left form-group col-md-' + col">
            <label :for="name">{{ label }}</label>
            <textarea :name="name" v-model="content" @input="handleInput" class="form-control"></textarea>
        </div>

        <div class="col-md-6 pill-wrapper">
            <span class="badge badge-pill badge-primary pill-style" v-for="(pill, key) in voucherPill" :key="key">{{ pill }} <a href="#" @click="removePill(key)">X</a></span>
        </div>
    </div>
</template>

<script>
export default {
    props: ['inputValue', 'label', 'name', 'col'],
    computed: {
        voucherPill: {
            get () {
                return this.voucherList
            }
        },
    },
    data() {
        return {
            content: this.inputValue,
            voucherList: []
        }
    },
    methods: {
        handleInput (e) {
            let split = this.content.split('\n');
            var lines = [];
            for (var i = 0; i < split.length; i++) {
                lines.push(split[i]);
                this.voucherList = lines
            }

            let elementSet = {
                name: e.target.name,
                value: lines
            }
            this.$store.commit('storeSet', elementSet)
        },
        removePill(index) {
            this.$store.commit('voucherRemove', index)
        },
    }
}
</script>

<style>
</style>
