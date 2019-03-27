<template>
    <div class="row">
        <component
            v-for="(field,key) in componentsData"
            :key="key"
            :is="field.component + 'Component'"
            v-bind="field">
        </component>

        <div class="form-group col-md-12 mt-3">
            <button type="button" class="btn btn-primary d-block" @click="$store.dispatch('postData')">Submit</button>
        </div>
    </div>
</template>

<script>
import sample from '../assets/sample'
import stringComponent from '../components/stringComponent'
import emailComponent from '../components/emailComponent'
import radioComponent from '../components/radioComponent'
import selectComponent from '../components/selectComponent'
import phoneComponent from '../components/phoneComponent'
import multi_stringComponent from '../components/multi_stringComponent'

export default {
    components: {
        stringComponent,
        emailComponent,
        radioComponent,
        selectComponent,
        phoneComponent,
        multi_stringComponent
    },
    data() {
        return {
            componentsData: [],
        }
    },
    mounted() {
        this.componentsData = sample;
    }
}
</script>

<style>
.pill-wrapper {
    display: flex;
    align-items: center;
}
.pill-style {
    padding: 0.5rem;
    margin: 0.5rem;
    font-size: 1rem;
}
.pill-style a {
    color: #fff;
    text-decoration: none;
    font-size: 0.75rem;
}
.pill-style a:hover {
    color: #fefefe;
}
</style>
