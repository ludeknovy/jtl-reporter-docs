import React from 'react';
import Layout from '@theme/Layout';

function Pricing() {
    return (
        <Layout title="Hello">
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                    width: '50%',
                    fontSize: '20px',
                    margin: 'auto'
                }}>
                <p>
                    JtlReporter is <strong>free</strong> and open source under GNU Affero General Public License v3.0
                    and MIT licence. But if you’re looking for dedicated support for installation,
                    integration, or customization, <a href="mailto:ludek@jtlreporter.site">drop me a line</a>.
                </p>
            </div>
        </Layout>
    );
}

export default Pricing;
