<template>
    <div class="form-group col-md-6 text-left">
        <label :for="labelName" v-if="labelName">{{ labelText }}:</label>
        <select :name="labelName" class="form-control" @change="handleChange" v-model="optionSelected">
            <option value="" selected disabled>Please select an option</option>
            <option :value="key" v-for="(option,key) in selectOpts" :key="key">{{ option }}</option>
        </select>
    </div>
</template>

<script>
export default {
    props: ['labelText', 'selectOpts', 'labelName'],

    data() {
        return {
            optionSelected: ''
        }
    },
    methods: {
        handleChange() {
            this.$emit('selected-option', this.optionSelected)
        }
    }
}
</script>

<style>
</style>
