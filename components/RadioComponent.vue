<template>
    <div :class="'text-left form-group col-md-' + col">
        <div>
            <label :for="name">{{ label }}:</label>
        </div>
        <div class="radio-wrapper">
            <div v-for="(gender, key) in genders" :key="key">
                <input type="radio" :name="name" v-model="selectedGender" :value="key" @change="handleChange">
                <label :for="name">{{ gender }}</label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['label', 'name', 'options', 'col'],
    data() {
        return {
            selectedGender: this.value,
            genders: []
        }
    },
    methods: {
        handleChange(e) {
            let elementSet = {
                name: e.target.name,
                value: this.selectedGender
            }
            this.$store.commit('storeSet', elementSet)
        }
    },
    mounted() {
        this.genders = this.options[0];
    }
}
</script>

<style>
.radio-wrapper {
    display: flex;
    align-items: center;
}
.radio-wrapper label {
    display: inline-block;
    margin-right: 1rem;
}
</style>
