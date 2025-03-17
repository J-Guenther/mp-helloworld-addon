// myMasterPortalFolder/addons/VueAddon/components/VueAddon.vue

<script>
import Tool from "../../../src/modules/tools/Tool.vue";
import {mapGetters, mapActions, mapMutations} from "vuex";
import getters from "../store/gettersVueAddon";
import mutations from "../store/mutationsVueAddon";

export default {
  name: "VueAddon",
  components: {
    Tool
  },
  computed: {
    ...mapGetters("Tools/VueAddon", Object.keys(getters))
  },
  /**
   * Put initialize here if mounting occurs after config parsing
   * @returns {void}
   */
  mounted () {
    this.initialize();
  },
  methods: {
    ...mapActions("Tools/VueAddon", [
      "initialize"
    ]),
    ...mapMutations("Tools/VueAddon", Object.keys(mutations))
  }
};
</script>

<template lang="html">
  <Tool
      :title="$t(name)"
      :icon="icon"
      :active="active"
      :render-to-window="renderToWindow"
      :resizable-window="resizableWindow"
      :deactivateGFI="deactivateGFI"
  >
    <template v-slot:toolBody>
      <div
          v-if="active"
          id="vue-addon"
      >
        {{ $t("additional:modules.tools.VueAddon.content") }}
      </div>
    </template>
  </Tool>
</template>
