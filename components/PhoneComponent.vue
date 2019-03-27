<template>
    <div :class="'text-left form-group col-md-' + col">
        <label :for="name">{{ label }}:</label>
        <div class="row">
            <select-component :name="name" :options="options[0].ext" @selectedOption="phoneExt" @change.native="setPhone" :col="col"/>
            <string-component :name="name" @inputText="phoneNum" @change.native="setPhone" :col="col"/>
        </div>
    </div>
</template>

<script>
import stringComponent from '../components/stringComponent'
import selectComponent from '../components/selectComponent'
export default {
    props: ['value', 'options', 'label', 'name', 'col'],
    components: {
        stringComponent,
        selectComponent
    },
    data() {
        return {
            phoneExtension: '',
            phoneNumber: ''
        }
    },
    methods: {
        phoneExt(value) {
            this.phoneExtension = value
        },
        phoneNum(value) {
            this.phoneNumber = value
        },
        setPhone() {
            this.$store.dispatch(this.name, {
                ext: this.phoneExtension,
                phone: this.phoneNumber
            })
        }
    },
}
</script>

<style>
</style>
