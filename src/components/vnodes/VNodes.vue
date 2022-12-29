<script>
export default {
    name: 'MVNodes',

    props: {
        vnodes: {
        }
    },

    setup(props) {
        return () => props.vnodes
    }
};
</script>
