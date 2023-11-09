<template>
    <div class="card mb-4">
        <h5 class="card-header">Default switches</h5>
        <div class="row row-bordered g-0">
            <div class="col-sm-6 p-4">
                <div class="text-light small fw-medium mb-3">Default</div>
                <label class="switch">
                    <input type="checkbox" class="switch-input" />
                    <span class="switch-toggle-slider">
                        <span class="switch-on"></span>
                        <span class="switch-off"></span>
                    </span>
                    <span class="switch-label">Default</span>
                </label>
            </div>
            <div class="col-sm-6 p-4">
                <div class="text-light small fw-medium mb-3">Square</div>
                <label class="switch switch-square">
                    <input type="checkbox" class="switch-input" />
                    <span class="switch-toggle-slider">
                        <span class="switch-on"></span>
                        <span class="switch-off"></span>
                    </span>
                    <span class="switch-label">Square</span>
                </label>
            </div>
        </div>
        <hr class="m-0" />
        <div class="row row-bordered g-0">
            <div class="col-sm-6 p-4">
                <div class="text-light small fw-medium mb-3">Default with icon</div>
                <label class="switch">
                    <input type="checkbox" class="switch-input" />
                    <span class="switch-toggle-slider">
                        <span class="switch-on">
                            <i class="ti ti-check"></i>
                        </span>
                        <span class="switch-off">
                            <i class="ti ti-x"></i>
                        </span>
                    </span>
                    <span class="switch-label">With icon</span>
                </label>
            </div>
            <div class="col-sm-6 p-4">
                <div class="text-light small fw-medium mb-3">Square with icon</div>
                <label class="switch switch-square">
                    <input type="checkbox" class="switch-input" />
                    <span class="switch-toggle-slider">
                        <span class="switch-on"><i class="ti ti-check"></i></span>
                        <span class="switch-off"><i class="ti ti-x"></i></span>
                    </span>
                    <span class="switch-label">With icon</span>
                </label>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Titled Card',
    setup() {


        return {}
    }
})
</script>

<style scoped></style>