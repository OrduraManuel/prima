<template>
    <div><h1 class="text-white">adrubale</h1></div>
    <div class="invoiceModal" @click="checkInvoice"> <!--   -->
        <form  class="invoiceContent" @submit.prevent="submitForm"> <!--  -->
            <h1>New invoice</h1>
            <!-- invoice from -->
            <div class="billFrom">
                <h4>Bill from</h4>
                <div class="input">
                    <label for="billerStreetAddress">Street Address</label>
                    <input required type="text" id="billerStreetAddress" v-model="biller.streetAddress" />
                </div>
                <div class="locationDetails">
                    <div class="input">
                        <label for="billerCity">City</label>
                        <input required type="text" id="billerCity" v-model="biller.city" />
                    </div>
                    <div class="input">
                        <label for="billerZipCode">ZipCode</label>
                        <input required type="text" id="billerZipCode" v-model="biller.zipCode" />
                    </div>
                    <div class="input">
                        <label for="billerCountry">Country</label>
                        <input required type="text" id="billerCountry" v-model="biller.country" />
                    </div>
                </div>
            </div>
            <div class="billTo">
                <h4>Bill to</h4>
                    
                        <div class="input">
                            <label for="clientName">Client name</label>
                            <input required type="text" id="clientName" v-model="client.name" />
                        </div>
                        <div class="input">
                            <label for="clientEmail">Client email</label>
                            <input required type="text" id="clientEmail" v-model="client.email" />
                        </div>
                        <div class="input">
                            <label for="clientStreetAddress">Client street address</label>
                            <input required type="text" id="clientStreetAddress" v-model="client.streetAddress" />
                        </div>
                    
                <div class="locationDetails">
                    <div class="input">
                        <label for="clientCity">City</label>
                        <input required type="text" id="clientCity" v-model="client.city" />
                    </div>
                    <div class="input">
                        <label for="clientZipCode">ZipCode</label>
                        <input required type="text" id="clientZipCode" v-model="client.zipCode" />
                    </div>
                    <div class="input">
                        <label for="clientCountry">Country</label>
                        <input required type="text" id="clientCountry" v-model="client.country" />
                    </div>
                </div>
            </div>
            <div class="invoiceWork">
                <div class="payment">
                    <div class="input">
                        <label for="invoiceDate">Invoice Date</label>
                        <input disabled type="text" id="invoiceDate" v-model="invoice.date" />
                    </div>
                    <div class="input">
                        <label for="paymentDueDate">Payment due date</label>
                        <input disabled type="text" id="PaymentDueDate" v-model="payment.dueDate" />
                    </div>    
                </div>
                <div class="input">
                    <label for="paymentTerms">payment Terms</label>
                    <select required type="text" id="paymentTerms" v-model="payment.terms">
                        <option value="30"> net 30 days</option>
                        <option value="60"> net 60 days</option>
                    </select>    
                </div>
                <div class="input">
                    <label for="paymentDescription">Payment Description</label>
                    <input required type="text" id="PaymentDescription" v-model="payment.description" />
                </div>    
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name : 'invoiceModal',
    data() {
        return{
            biller: {
                streetAddress: null,
                city: null,
                zipCode: null,
                country: null,
            },
            client: {
                name: null,
                email: null,
                streetAddress: null,
                city: null,
                zipCode: null,
                country: null,
            },
            payment: {
                terms: null,
                dueDateUnix: null,
                dueDate: null,
            },
            product: {
                description: null,
            },
            invoice: {
                dateUnix: null,
                date: null,
                draft: null,
                itemList: [],
                total: 0,
            }
        }
    },
    methods:{
        checkInvoice(){

        },
    }
}
</script>

        


