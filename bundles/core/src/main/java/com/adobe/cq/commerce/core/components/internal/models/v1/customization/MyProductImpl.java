/*******************************************************************************
 *
 *    Copyright 2019 Adobe. All rights reserved.
 *    This file is licensed to you under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License. You may obtain a copy
 *    of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software distributed under
 *    the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 *    OF ANY KIND, either express or implied. See the License for the specific language
 *    governing permissions and limitations under the License.
 *
 ******************************************************************************/

package com.adobe.cq.commerce.core.components.internal.models.v1.customization;

import java.util.List;

import javax.annotation.PostConstruct;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.Self;

import com.adobe.cq.commerce.core.components.models.product.Asset;
import com.adobe.cq.commerce.core.components.models.product.Product;
import com.adobe.cq.commerce.core.components.models.product.ProductRetriever;
import com.adobe.cq.commerce.core.components.models.product.Variant;
import com.adobe.cq.commerce.core.components.models.product.VariantAttribute;
import com.adobe.cq.commerce.magento.graphql.ConfigurableProduct;
import com.adobe.cq.commerce.magento.luma.graphql.LumaConfigurableProduct;
import com.adobe.cq.commerce.magento.luma.graphql.LumaProductInterfaceQuery;
import com.shopify.graphql.support.SchemaViolationError;

@Model(adaptables = SlingHttpServletRequest.class, adapters = MyProduct.class, resourceType = MyProductImpl.RESOURCE_TYPE)
public class MyProductImpl implements MyProduct {

    protected static final String RESOURCE_TYPE = "venia/components/commerce/myproduct";

    @Self
    @Via
    private Product product;

    private ProductRetriever productRetriever;
    private LumaConfigurableProduct lumaProduct;

    @PostConstruct
    public void initModel() {
        productRetriever = product.getProductRetriever();

        // Pass your custom partial query to the ProductRetriever. This class will automatically take care of executing your query as soon
        // as you try to access any product property.
        productRetriever.extendProductQueryWith(p -> {
            LumaProductInterfaceQuery custom = new LumaProductInterfaceQuery(p.getQueryBuilder(), true, false);
            custom
                .activity()
                .categoryGear();
        });
    }

    private LumaConfigurableProduct getLumaProduct() {
        if (lumaProduct == null) {
            ConfigurableProduct configurableProduct = (ConfigurableProduct) productRetriever.getProduct();
            try {
                lumaProduct = new LumaConfigurableProduct(configurableProduct.getFields());
            } catch (SchemaViolationError e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
        return lumaProduct;
    }

    @Override
    public String getActivity() {
        return getLumaProduct().getActivity();
    }

    @Override
    public String getCategoryGear() {
        return getLumaProduct().getCategoryGear();
    }

    @Override
    public Boolean getFound() {
        return product.getFound();
    }

    @Override
    public String getName() {
        return product.getName();
    }

    @Override
    public String getDescription() {
        return product.getDescription();
    }

    @Override
    public String getSku() {
        return product.getSku();
    }

    @Override
    public String getCurrency() {
        return product.getCurrency();
    }

    @Override
    public Double getPrice() {
        return product.getPrice();
    }

    @Override
    public String getFormattedPrice() {
        return product.getFormattedPrice();
    }

    @Override
    public Boolean getInStock() {
        return product.getInStock();
    }

    @Override
    public Boolean isConfigurable() {
        return product.isConfigurable();
    }

    @Override
    public String getVariantsJson() {
        return product.getVariantsJson();
    }

    @Override
    public List<Variant> getVariants() {
        return product.getVariants();
    }

    @Override
    public List<Asset> getAssets() {
        return product.getAssets();
    }

    @Override
    public String getAssetsJson() {
        return product.getAssetsJson();
    }

    @Override
    public List<VariantAttribute> getVariantAttributes() {
        return product.getVariantAttributes();
    }

    @Override
    public Boolean loadClientPrice() {
        return product.loadClientPrice();
    }

    @Override
    public ProductRetriever getProductRetriever() {
        return product.getProductRetriever();
    }

}
