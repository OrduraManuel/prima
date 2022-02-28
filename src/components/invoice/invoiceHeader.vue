<template>
    <div class="invoiceHeader">
        <div class="left">
            <h3>Invoices</h3>
            <span>There're 4 total invoices</span>
        </div>
        <div class="right">
            <div class="filter my-auto" ref="filter" @click="toggleFilterMenu">
                <span>Filter by status</span>
                <img src="@/assets/icon/icon-arrow-down.svg" alt="">
                <ul v-show="filterMenu" class="filter-menu">
                    <li><p>Draft</p></li>
                    <li><p>Pending</p></li>
                    <li><p>Paid</p></li>
                    <li><p>Clear filter</p></li>
                </ul>
            </div>
            <div class=" btn-filter" @click="newInvoice">
                <div class="containerPlus my-auto">
                    <img class="" src="@/assets/icon/icon-plus.svg" alt="">
                </div>
                <div class="containerText my-auto">
                    <span class="">Crea</span>
                    <span class="">Fattura</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'invoiceHeader',
    data() {
        return{
            filterMenu: null,
        }
    },
    methods: {
        newInvoice() {},
        toggleFilterMenu(){
            this.filterMenu = !this.filterMenu;
        }
    }
}
</script>